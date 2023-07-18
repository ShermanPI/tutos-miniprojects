export function ArrowNavigation ({ direction }) {
  return (
    <div className={`arrow-container arrow-container-${direction}`}>
      <img src='src/assets/img/arrow.png' className={`arrow ${direction}-arrow`} />
    </div>
  )
}
