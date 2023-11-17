const ResetButton = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

const CategoryItem = ({ clasname, item, onClick, children }) => (
  <span onClick={onClick} className={clasname}>
    {item}
    {children}
  </span>
);

export { ResetButton, CategoryItem };
