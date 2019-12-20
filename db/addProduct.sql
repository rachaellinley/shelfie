INSERT INTO products
(product_name, product_price, img_url)
VALUES
($1, $2, $3)
RETURNING *;