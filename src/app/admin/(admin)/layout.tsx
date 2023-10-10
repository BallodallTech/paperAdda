const AdminLayout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default AdminLayout;
