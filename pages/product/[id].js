// import axios from "axios";
import ProductPage from "../../src/pages/ProductPage/ProductPage";
import { attachHeaders, getProductById, getProductVariations, publicAPI } from "../../src/utils";

export const getStaticPaths = async () => {
    const url = await attachHeaders("products");
    const { data } = await publicAPI.get(url);
    const paths = data?.map((product) => {
        return {
            params: { id: product.id.toString() },
        };
    });
    return {
        paths,
        fallback: false,
    };
};
export const getStaticProps = async (context) => {
    const { id } = context.params;
    const product = await getProductById(id);
    const variations = await getProductVariations(id);
    // console.log(variations);
    const res1 = await publicAPI.get(product);
    const res2 = await publicAPI.get(variations);
    // console.log(res1);
    return {
        props: { product: res1?.data, variations: res2?.data },
    };
};
const index = ({ product, variations }) => <ProductPage product={product} variations={variations} />;

export default index;
