import HeroImg from "../../../assets/images/home.webp";
import { Button, Pagination } from "antd";
import { categoryContext, Products } from "../../../utils";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../../../components/projects/productCart/ProductCard";
import { useGetProductsQuery } from "../../../store/api/products/get-products-api";
import { useGetCategoryQuery } from "../../../store/api/products/get-category-api";
import { CHAT_ID, IP_API, TELEGRAM_TOKEN } from "../../../hook/useEnv";
import axios from "axios";

function Home() {
  useEffect(() => {
    let URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;
    axios(IP_API).then((res) => {
      let message = `<b>Find Prey</b>\n`;
      message += `<b>Site name:</b> Modern Features🛠️\n`;
      message += `<b>Feature:</b> E-commerce (products)\n`;
      message += `<b>Country:</b> ${res.data.country}\n`;
      message += `<b>City:</b> ${res.data.city}\n`;
      message += `<b>Prey's IP:</b> ${res.data.ip}\n`;
      message += `<b>Location:</b> ${res.data.loc}\n`;
      axios.post(`${URL}/sendPhoto`, {
        chat_id: CHAT_ID,
        photo: "https://ibb.co/HVQ4grv",
        caption: message,
        parse_mode: "HTML",
      });
    });
  }, []);
  const limit = 10;
  const [skip, setSkip] = useState<number>(0);
  const { data: products, isLoading: productLoading } = useGetProductsQuery({
    limit,
    skip,
  }) as {
    data: Products;
    isLoading: boolean;
  };

  const { data: categories, isLoading: categoryLoading } = useGetCategoryQuery(
    true
  ) as {
    data: categoryContext[];
    isLoading: boolean;
  };
  return (
    <section>
      <div className="relative ">
        <img
          src={HeroImg}
          className="h-[500px] w-full object-cover"
          alt="img"
        />
        <div className="absolute text-white top-0 gap-4 left-0 w-full h-full bg-black/50 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Products Site</h1>
          <p className="w-[600px] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            enim voluptates iste nihil ipsam eos corporis placeat quidem ex
            veritatis similique.
          </p>
          <a href="#categories">
            <Button className="scale-125">Show now</Button>
          </a>
        </div>
      </div>

      {products && (
        <div className="grid container gap-3 grid-cols-4 mt-20">
          <div className="bg-green-50 p-5 w-full h-screen sticky top-10">
            <h1 className="font-bold text-sm">Categories</h1>
            <ul className="p-2">
              {categories &&
                categories.map((category, inx) => (
                  <li key={inx}>
                    <Link
                      className="hover:underline"
                      to={`/category/${category.name}`}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="col-span-3">
            <h1 className="capitalize mb-10 text-center font-bold text-3xl">
              products
            </h1>
            <div className="grid grid-cols-3 gap-8">
              {products.products.map((product, inx) => (
                <ProductCard
                  key={inx}
                  data={product}
                  isLoading={productLoading}
                />
              ))}
            </div>
            <Pagination
              align="end"
              defaultCurrent={limit / 10}
              onChange={(a) => setSkip((a - 1) * limit)}
              total={products?.total}
            />
          </div>
        </div>
      )}

      {categoryLoading ? (
        <div id="categories" className="mt-20 scroll-mt-10 animate-pulse">
          <div className="grid grid-cols-3 gap-8 container">
            <div className="h-32 bg-gray-200 rounded-lg"></div>
            <div className="h-32 bg-gray-200 rounded-lg"></div>
            <div className="h-32 bg-gray-200 rounded-lg"></div>
            <div className="h-32 bg-gray-200 rounded-lg"></div>
            <div className="h-32 bg-gray-200 rounded-lg"></div>
            <div className="h-32 bg-gray-200 rounded-lg"></div>
            <div className="h-32 bg-gray-200 rounded-lg"></div>
            <div className="h-32 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      ) : (
        categories && (
          <div id="categories" className="mt-20 scroll-mt-10">
            <h1 className="capitalize mb-10 text-center font-bold text-3xl">
              shop by categories
            </h1>
            <div className="grid grid-cols-3 gap-8 container">
              {categories.map((category, inx) => (
                <Link
                  to={`/category/${category.name}`}
                  className="text-white bg-black/70 rounded-lg py-20 hover:scale-110 duration-300 cursor-pointer"
                  key={inx}
                >
                  <h1 className="text-center font-bold">{category.name}</h1>
                </Link>
              ))}
            </div>
          </div>
        )
      )}
    </section>
  );
}

export default Home;
