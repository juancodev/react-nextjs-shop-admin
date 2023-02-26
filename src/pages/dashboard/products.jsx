import { useState } from 'react';
import Modal from '@/common/Modal';
import FormProduct from '@/components/FormProduct';
import { PlusIcon } from '@heroicons/react/20/solid';

export default function Products() {
  const [product, setProduct] = useState([]);
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          List of Products
        </h2>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="sm:ml-3">
          <button
            onClick={() => setOpen(true)}
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Add Product
          </button>
        </span>

        {/* Dropdown */}
        <Modal open={open} setOpen={setOpen}>
          <FormProduct />
        </Modal>
      </div>
    </div>
  );
}
