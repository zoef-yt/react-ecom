import { useOrders } from '../../context';
import { Footer, Header } from '../allComponent';
import { useNavigate } from 'react-router-dom';

import './OrdersPage.css';
export const OrdersPage = () => {
	const { orders } = useOrders();
	return (
		<div className='order-homepage'>
			<Header />
			<div className='order-body'>
				<h1 className='text-align-center'>Orders</h1>
				<div className='orders-container'>
					{orders.map(({ paymentId, myCart, totalAmount }, index) => (
						<SingleOrderContainer key={paymentId} myCart={myCart} totalAmount={totalAmount} paymentId={paymentId} index={index} />
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

const SingleOrderContainer = ({ myCart, totalAmount, paymentId, index }) => {
	console.log(myCart);
	const navigate = useNavigate();
	return (
		<div className='single-order-container'>
			<details>
				<summary>
					<span className='product-page-summary-tag'>
						<span>Order: NG-0{index + 1}</span>
						<span>Total price: ₹{totalAmount.toLocaleString()}</span>
					</span>
				</summary>
				{myCart.map((product) => {
					return (
						<div onClick={() => navigate(`/products/${product._id}`)} className='order-page-single-product'>
							<img className='order-page-img ' src={product.image} />
							<div className='product-detail'>
								<h3>{product.name}</h3>
								<p>
									₹{product.price.toLocaleString()}
									{product.qty > 1 && ` x  ${product.qty}`}
								</p>
							</div>
						</div>
					);
				})}
			</details>
		</div>
	);
};
