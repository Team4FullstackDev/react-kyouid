export default function StoreItem({ store }) {
  return (
    <div className={store.className}>
      <a href={store.href} target="_blank" rel="noreferrer">
        <img src={store.src} alt={store.alt} />
      </a>
    </div>
  );
}
