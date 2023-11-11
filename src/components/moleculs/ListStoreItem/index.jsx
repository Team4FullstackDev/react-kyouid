import StoreItem from "../../atoms/StoreItem";

export default function ListStoreItem({ data }) {
  return (
    <div className="section__2-list-store">
      {data.map((store) => (
        <StoreItem key={store.id} store={store} />
      ))}
    </div>
  );
}
