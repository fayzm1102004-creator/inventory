function ProductCard({name ,price ,isAvailable,onBuy}){

return(

<div
      style={{
        border: "1px solid #475569",
        borderRadius: "12px",
        padding: "16px",
        width: "220px",
        backgroundColor: "#1e293b",
        color: "#f8fafc",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* 1. عرض اسم المنتج */}
      <h3 style={{ margin: 0, fontSize: "1.2rem", color: "#38bdf8" }}>{name}</h3>

      {/* 2. عرض السعر */}
      <p style={{ margin: 0, color: "#94a3b8" }}>السعر: {price} جنيه</p>

      {/* 3. Conditional Rendering بناءً على isAvailable */}
      {isAvailable ? (
        <button
          onClick={onBuy}
          style={{
            backgroundColor: "#0284c7",
            color: "white",
            border: "none",
            borderRadius: "6px",
            padding: "8px 12px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          شراء
        </button>
      ) : (
        <span
          style={{
            color: "#f87171",
            fontWeight: "bold",
            padding: "8px 0",
          }}
        >
          غير متوفر حالياً
        </span>
      )}
    </div>
)
}
export default ProductCard
