import { useState, useReducer } from "react";
import Form from "./ProductForm";
import Note from "./ProductNote";
import "./Dashboard.css"; // استدعاء ملف التنسيق الجديد

function ProductReducer(produts, action) {
  switch (action.type) {
    case "deleted": {
      return produts.filter((item) => item.id !== action.id);
    }
    case "added": {
      return [...produts, action.newproduct];
    }
    case "increase": {
      return produts.map((item) => {
        if (item.id === action.id) {
          return { ...item, price: Number(item.price) + 100 };
        }
        return item;
      });
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

function Dashboard() {
  const [store, setStore] = useState({
    name: "متجر فايز للتقنية",
    city: "قنا",
    branch: "أبوتشت",
  });

  const [products, dispatch] = useReducer(ProductReducer, [
    { id: 1, title: "Laptop Dell", price: 15000 },
    { id: 2, title: "Wireless Mouse", price: 300 },
  ]);
  const [selectedid, setselectedid] = useState(null);
  const [operations, setOperations] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const FilterProduct = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectProduct = products.find((item) => item.id === selectedid);
  const totalPrice = products.reduce((total, p) => total + Number(p.price), 0);

  function updateBranch() {
    setStore((prevStore) => ({
      ...prevStore,
      branch: prevStore.branch === "أبوتشت" ? "الدقي" : "أبوتشت",
    }));
  }

  function handleTripleAction() {
    setOperations((prev) => prev + 1);
    setOperations((prev) => prev + 1);
    setOperations((prev) => prev + 1);
  }

  return (
    <div className="dashboard-container">
      
      {/* 1. رأس الصفحة */}
      <header className="dashboard-header">
        <div className="store-info">
          <h2>{store.name} 🚀</h2>
          <p>
            📍 {store.city} | <span className="branch-badge">{store.branch}</span>
          </p>
        </div>
        <div className="actions">
          <button className="btn-outline" onClick={updateBranch}>
            🔄 تبديل الفرع
          </button>
          <button className="btn-primary" onClick={handleTripleAction}>
            ⚡ +3 فحص مجمّع
          </button>
        </div>
      </header>

      {/* 2. كروت الإحصائيات العلوية */}
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">إجمالي المنتجات</span>
          <span className="stat-value">{products.length} منتج</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">قيمة المخزون</span>
          <span className="stat-value">{totalPrice.toLocaleString()} ج.م</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">العمليات المسجلة</span>
          <span className="stat-value">{operations} عملية</span>
        </div>
      </div>

      {/* 3. شبكة المحتوى الرئيسي */}
      <div className="main-grid">
        
        {/* العمود الجانبي (لإضافة منتج وتفاصيل المنتج المحدد) */}
        <aside>
          <div className="content-card">
            <h3 className="card-title">✨ إضافة منتج جديد</h3>
            <Form dispatch={dispatch} />
          </div>

          {selectProduct && (
            <div className="selected-product-area">
              <h3 className="card-title">🎯 المنتج المحدد</h3>
              <p><strong>{selectProduct.title}</strong> — {selectProduct.price} ج.م</p>
              <Note key={selectProduct.id} productTitle={selectProduct.title} />
            </div>
          )}
        </aside>

        {/* العمود الرئيسي (قائمة المنتجات والبحث) */}
        <section>
          <div className="content-card">
            <h3 className="card-title">
              📦 إدارة المخزون
            </h3>
            
            <input
              className="search-input"
              type="text"
              placeholder="🔍 ابحث عن منتج بالاسم..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              
            />

            {products.length === 0 ? (
              <p style={{ textAlign: "center", color: "#888", padding: "20px" }}>
                المخزن فارغ حالياً.
              </p>
            ) : (
              <div className="product-list">
                {FilterProduct.map((product) => (
                  <div key={product.id} className="product-row">
                    <div className="product-info">
                      <h4>{product.title}</h4>
                      <span className="product-price">
                        {Number(product.price).toLocaleString()} ج.م
                      </span>
                    </div>
                    <div className="actions">
                      <button
                        className="btn-increase"
                        onClick={() => dispatch({ type: "increase", id: product.id })}
                      >
                        +100
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => dispatch({ type: "deleted", id: product.id })}
                      >
                        حذف
                      </button>
                      <button
                        className="btn-outline"
                        onClick={() => setselectedid(product.id)}
                      >
                        تحديد
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}

export default Dashboard;