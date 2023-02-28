import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import endPoints from '@/api/api.escuelajs';
import FormProduct from '@/components/FormProduct';

export default function Edit() {
  const [product, setProduct] = useState({});
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;

    if (!router.isReady) return;
    async function getProduct() {
      const response = axios.get(endPoints.products.getProduct(id));
      setProduct(response.data);
    }
    getProduct();
  }, [router?.isReady]);
  return <FormProduct product={product} />;
}
