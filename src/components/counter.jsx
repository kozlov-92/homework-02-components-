import React, { useLayoutEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const tags = ["tag1"];
  {
    /*добавление фото
const [imageUrl, setImageUrl] = useState("https://picsum.photos/200");
*/
  }

  const formCount = () => {
    return count === 0 ? "Ноль" : count;
  };
  {
    /*создаем переменную стилей и помещаем его после в span
    либо прописываем значения просто в style в span
    style={{ fontSize: "10px", fontWeight: "bold" }}
    const styles = {
    fontSize: "10px",
    fontWeight: "bold",
  };*/
  }

  const getBageClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  const renderTags = () => {
    if (tags.length === 0) return "Тегов не найдено";
    return tags.map((tag) => <li key={tag}>tag</li>);
  };

  const handleIncrement = (productId) => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) return setCount(count - 1);
  };

  return (
    <React.Fragment>
      {/*добавление фото
      <img src={imageUrl} alt="" />
      */}
      {/* React.Fragment или просто скобки <> используется чтобы разместить два компонента*/}
      {/*{tags.length === 0 && "Тегов НЕТ!"}*/}
      {renderTags()}
      <span className={getBageClasses()}>{formCount()}</span>
      <button
        onClick={() => handleIncrement({ id: 1 })}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => handleDecrement({ id: 1 })}
        className="btn btn-secondary btn-sm"
      >
        Decrement
      </button>
    </React.Fragment>
  );
};

export default Counter;
