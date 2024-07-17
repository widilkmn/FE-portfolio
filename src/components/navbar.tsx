const Navbar = () => {
  return (
    <div className="flex flex-row w-full justify-between px-10 py-10 shadow-md">
      <h2 className="text-base">NAME</h2>
      <div className="flex flex-row gap-5">
        <a href="#">HOME</a>
        <a href="#">SUMMARY</a>
        <a href="#">PROJECT</a>
        <a href="#">EDUCATION</a>
      </div>
    </div>
  );
};

export default Navbar;
