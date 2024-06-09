import { addToCart, loadCart } from '~/lib/server/cart';
import { loadProducts } from '~/lib/server/products.js';

// /products/[id] 에 연결하여 서버 측에서 수행할 작업을 정의
// load 함수를 내보내면 스벨트킷에서 이 라우트에 액세스 할 때 자동으로 load함수를 서버측에서 실행하고 반환값을 data라는 속성으로 페이지 컴포넌트에 전달함

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		await addToCart(data.get('productId'));
	}
};

export async function load({ params }) {
	const products = await loadProducts();
	const product = products.find((product) => params.id === product.id);
	const relatedProducts = products.filter((product) => params.id !== product.id);
	const cart = await loadCart();
	return { product, relatedProducts, cart };
}
