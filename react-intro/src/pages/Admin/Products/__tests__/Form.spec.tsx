import { render, screen } from "@testing-library/react";
import Form from "../Form";
import { Router, useParams } from "react-router-dom";
import history from "util/history";
import userEvent from "@testing-library/user-event";
import { server } from "./fixtures";
import selectEvent from "react-select-event";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn()
}))

describe('Product form create tests', async () => {

    beforeEach(() => {
        (useParams as jest.Mock).mockReturnValue({
            productId : 'create'
        })
    })

    test('Should render form', async () => {
   
        render(
            <Router history={history}>
                <Form />
            </Router>
        );
        const nameInput = screen.getByTestId("name");
        const priceInput = screen.getByTestId("price");
        const imgUrlInput = screen.getByTestId("imgUrl");
        const description = screen.getByTestId("description");
        const categoriesInput = screen.getByLabelText("Categorias");

        userEvent.type(nameInput, 'Computador');
        userEvent.type(priceInput, '5000.12');
        userEvent.type(imgUrlInput, '	https://avatars.githubusercontent.com/u/98181553?s…00&u=f0b2c500abb5bce8eaaf19f209e56ce9d819b4ef&v=4');
        userEvent.type(description, 'Computador muuuuuito bom');

       await selectEvent.select(categoriesInput, ['Eletrônicos', 'Computadores']);

    });
    
})
