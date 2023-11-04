import { useParams, Link } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Detail</h1>

      <p>{params.id}</p>

      <p>
        {/* 
          in this case, the route products/:id and products are sibilings 
          therefore, navigating to ".." means to the parent which is the root

          it is possible to change this using the relative="path" instead of
          relative="route" (default) or adding the products/:id as a products'
          children
        */}
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default ProductDetailPage;
