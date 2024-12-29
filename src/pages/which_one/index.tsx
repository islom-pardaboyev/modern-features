import { useWhichOne } from "../../context";
import { WhichOneContext } from "../../utils";

function WhichOne() {
  const {setWhichOne} = useWhichOne()
  return (
    <div className="items-center justify-center w-full h-screen container gap-8 grid grid-cols-3">
      {WhichOneContext.map((item, inx) => (
        <div onClick={() => setWhichOne(item.name)}
          className="border rounded-lg cursor-pointer hover:text-sky-500 duration-300 hover:border-sky-500 hover:scale-110  flex flex-col gap-4 py-5 items-center"
          key={inx}
        >
          {item.icon}
          <h1 className="text-3xl font-bold capitalize">{item.name}</h1>
          <p className="text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default WhichOne;
