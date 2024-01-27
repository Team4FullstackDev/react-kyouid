
export const TextAtom = ({ className, children }) => (
  <span className={className}>{children}</span>
);
export const LinkAtom = ({ className, href, children }) => (
  <a className={className} href={href}>
    {children}
  </a>
);
export const InputAtom = ({ type, className, placeholder, value }) => (
  <input
    type={type}
    className={className}
    placeholder={placeholder}
    value={value}
  />
);