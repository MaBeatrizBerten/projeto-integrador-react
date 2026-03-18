import Item from './Item'

function Lista({ nomes, removerNome }) {
  return (
    <ul>
      {nomes.map((item) => (
        <Item
          key={item.id}
          nome={item.valor}
          onRemover={() => removerNome(item.id)}
        />
      ))}
    </ul>
  )
}

export default Lista
