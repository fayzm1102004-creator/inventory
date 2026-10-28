import React, { useState ,useContext} from "react";
import{ProductContext,ProductDispatchContext} from "./ProductContext"

function Form() {
  const [Productform, setProductform] = useState({ title: "", price: "" });
const dispatch=useContext(ProductDispatchContext)
  function handleChange(e) {
    setProductform({
      ...Productform,
      [e.target.name]: e.target.value,
    });
  }

  function AddProduct(e) {
    e.preventDefault();
    dispatch({
      type: "added",
      newproduct: {
        id: Date.now(),
        title: Productform.title,
        price: Number(Productform.price), // تحويل السعر لرقم هنا مهم جداً
      },
    });
    setProductform({ title: "", price: "" });
  }

  const isEmpty = Productform.title === "" || Productform.price === "";
  const isInvalidPrice = Productform.price !== "" && Number(Productform.price) <= 0;

  return (
    <form 
      onSubmit={AddProduct} 
      style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
    >
      <input
        className="search-input" /* استخدمنا نفس كلاس البحث عشان نوحد شكل الـ Inputs */
        style={{ marginBottom: '0'  ,color:"black"}}
        onChange={handleChange}
        name="title"
        placeholder="اسم المنتج (مثال: كيبورد ميكانيكال)"
        value={Productform.title}
      />
      
      <input
        className="search-input"
        style={{ marginBottom: '0',color:"black" }}
        onChange={handleChange}
        name="price"
        type="number"
        placeholder="السعر (ج.م)"
        value={Productform.price}
      />
      
      {isInvalidPrice && (
        <p style={{ color: "var(--danger)", fontSize: "13px", margin: "0" }}>
          ⚠️ يجب أن يكون السعر أكبر من صفر
        </p>
      )}
      
      <button
        type="submit"
        className="btn-primary"
        disabled={isEmpty || isInvalidPrice}
        style={{
          padding: '12px',
          opacity: (isEmpty || isInvalidPrice) ? 0.5 : 1,
          cursor: (isEmpty || isInvalidPrice) ? 'not-allowed' : 'pointer'
        }}
      >
        ➕ إضافة للمخزن
      </button>
    </form>
  );
}

export default Form;