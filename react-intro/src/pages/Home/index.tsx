import ButtonIcon from '../../components/ButtonIcon';
import { ReactComponent as MainImage } from '../../assets/images/main-image.svg';
import { hasAnyRoles, isAuthenticated } from 'util/requests';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h1>Resultado = {hasAnyRoles(['ROLE_ADMIN', 'ROLE_OPERATOR'])? 'sim' : 'não'}</h1>
        <div className="base-card home-card">
          <div className="home-content-container">
            <div>
              <h1>Conheça o melhor catálogo de produtos</h1>
              <p>
                Ajudaremos você a encontrar os melhores produtos disponíveis no
                mercado.
              </p>
            </div>
            <Link to="/products"></Link>
            <ButtonIcon text="Inicie agora a sua busca" />
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
