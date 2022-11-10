import axios from 'axios';
import Pagination from 'components/Pagination';
import ProductCard from 'components/ProductCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';
import { AxiosParams } from 'types/vendors/axios';
import { SpringPage } from 'types/vendors/spring';
import { BASE_URL } from 'util/requests';
import CardLoader from './CardLoader';

import './styles.css';

const Catalog = () => {
  const [page, setPage] = useState<SpringPage<Product>>();
  // 1. isLoading começa com false

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const params: AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/products`,
      params: {
        page: 0,
        size: 12,
      },
    };
    // 2. ao fazer a requisição, passa isLoading para true para indicar ao componente que está carregando
    // 3. chama a requisição
    setIsLoading(true);
    axios(params)
      .then((response) => {
        setPage(response.data);
        // 4. depois que resolver a requisição, chama o setIsLoading para false, indicando que não está mais carregando
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="container my-4 catalog-container">
        <div className="row catalog-title-container">
          <h1>Catálogo de produtos</h1>
        </div>

        <div className="row">
          {isLoading ? (
            <CardLoader />
          ) : (
            page?.content.map((product) => (
              <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
                <Link to="/products/1">
                  <ProductCard product={product} />
                </Link>
              </div>
            ))
          )}
        </div>

        <div className="row">
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default Catalog;
