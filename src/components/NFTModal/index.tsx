import { useMemo, useRef } from "react";

import { NFT } from "@/constants/types";
import useOnClickOutside from "@/hooks/useOnClickOutside";

type NFTModalProps = {
  item: NFT;
  handleClose: () => void;
};

const NFTModal = ({ item, handleClose }: NFTModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => handleClose());

  const metadata = useMemo(() => {
    if (item.metadata) {
      return JSON.parse(item.metadata);
    }
  }, [item]);

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/[.5]">
      <div className="relative w-full h-full max-w-2xl md:h-auto" ref={ref}>
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {item.name}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
              onClick={() => handleClose()}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {metadata?.description}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Amount: {item.amount}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Symbol: {item.symbol}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Owner: {item.owner_of}
            </p>
          </div>
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <a
              href={`https://opensea.io/assets/ethereum/${item.token_address}/${item.token_id}`}
              className="border-2 px-3 py-2 rounded-lg ml-auto border-blue-500 text-blue-500"
              target="_blank"
            >
              Open Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTModal;
