import { navbarContext } from "../../../utils";
import { NavLink, useNavigate } from "react-router-dom";
import { AutoComplete } from "antd";
import { useState } from "react";
import { useGetSearchedProductQuery } from "../../../store/api/products/get-searched-product-api";


function Header() {
  const navigate = useNavigate()
  const [searchedText, setSearchedtext] = useState<string>("");
  const { data } = useGetSearchedProductQuery(searchedText);
  const [options, setOptions] = useState<{ id: number; label: string }[]>([]);
  const handleChange = (e: string) => {
    if (e) {
      setSearchedtext(e);

      const result = data.products.map(
        (product: { id: number; title: string }) => ({
          value: product.id,
          label: product.title,
        })
      );
      setOptions(result);
    }
  };
  const handleChooseMovie = (id: number) => {
    navigate(`/${id}`)
  };
  return (
    <header className="border-b py-3">
      <div className="container  flex items-center justify-between ">
        <p onClick={() => navigate("/")} className="font-bold cursor-pointer text-3xl">
          Logo.
        </p>
        <nav className="flex items-center gap-4">
          {navbarContext.map((item, inx) => (
            <NavLink className={"capitalize"} key={inx} to={item.link}>
              {item.name}
            </NavLink>
          ))}
        </nav>
        <AutoComplete
          onSearch={handleChange}
          allowClear
          options={options}
          onSelect={handleChooseMovie}
          style={{ width: 300 }}
          placeholder="Search movies"
        />
      </div>
    </header>
  );
}

export default Header;
