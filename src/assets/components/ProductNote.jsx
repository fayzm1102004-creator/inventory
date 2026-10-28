import React, { useState } from "react";

function Note({ productTitle }) {
  const [note, setNote] = useState("");

  return (
    <div style={{ 
      marginTop: "16px", 
      padding: "16px", 
      backgroundColor: "var(--card-bg)", 
      borderRadius: "12px", 
      border: "1px solid var(--border)" 
    }}>
      <p style={{ margin: "0 0 10px 0", fontSize: "14px", color: "var(--text-main)" }}>
        📝 ملاحظات: <strong>{productTitle}</strong>
      </p>
      <input
        className="search-input" /* استخدمنا نفس كلاس البحث عشان نوحد الشكل */
        style={{ marginBottom: "0", backgroundColor: "var(--secondary)" }}
        type="text"
        placeholder="اكتب ملاحظة خاصة بالمنتج هنا..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </div>
  );
}

export default Note;