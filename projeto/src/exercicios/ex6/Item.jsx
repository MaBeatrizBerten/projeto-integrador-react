function Item({ nome, onRemover }) {
  return (
    <li>
      {nome}
      <button className="remover" onClick={onRemover}>Remover</button>
    </li>
  )
}

export default Item