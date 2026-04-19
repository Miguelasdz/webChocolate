export type ProductCategory =
	| 'semiamarga'
	| 'leche'
	| 'especialidades'
	| 'bebidas-y-cocina';

export interface Product {
	slug: string;
	name: string;
	line: string;
	category: ProductCategory;
	shortDescription: string;
	description: string;
	image: string;
	alt: string;
	featured?: boolean;
	notes: string[];
	presentation: string;
	idealFor: string;
}

export const categoryLabels: Record<ProductCategory, string> = {
	semiamarga: 'Línea Semiamarga',
	leche: 'Línea de Leche',
	especialidades: 'Especialidades',
	'bebidas-y-cocina': 'Bebidas y Cocina',
};

export const products: Product[] = [
	{
		slug: 'chocolate-semiamargo-con-nuez',
		name: 'Chocolate semiamargo con Nuez',
		line: 'Línea semiamarga',
		category: 'semiamarga',
		shortDescription: 'Relleno crujiente y tostado para quienes prefieren un perfil clásico e intenso.',
		description:
			'Un corazón de chocolate semiamargo que abraza una nuez entera para lograr un balance elegante entre cacao profundo y textura crujiente.',
		image: '/images/products/granos-cafe-cubiertos.jpeg',
		alt: 'Chocolate semiamargo artesanal con nuez.',
		featured: true,
		notes: ['Cacao semiamargo', 'Nuez tostada', 'Textura crujiente'],
		presentation: 'Ideal para caja surtida, obsequio o mesa de postres.',
		idealFor: 'Amantes del chocolate con un toque tostado y elegante.',
	},
	{
		slug: 'chocolate-semiamargo-con-almendra',
		name: 'Chocolate semiamargo con Almendra',
		line: 'Línea semiamarga',
		category: 'semiamarga',
		shortDescription: 'Almendra entera en un centro firme y refinado.',
		description:
			'Una pieza de acabado artesanal con cobertura semiamarga y almendra al centro, pensada para quien disfruta bocados finos y balanceados.',
		image: '/images/products/semiamargo-almendra.jpeg',
		alt: 'Chocolate semiamargo artesanal con almendra.',
		featured: true,
		notes: ['Almendra entera', 'Perfil elegante', 'Final limpio'],
		presentation: 'Excelente para venta por pieza, charola o empaque de regalo.',
		idealFor: 'Clientes que buscan un sabor sofisticado y menos dulce.',
	},
	{
		slug: 'chocolate-semiamargo-con-ciruela-pasa',
		name: 'Chocolate semiamargo con Ciruela Pasa',
		line: 'Línea semiamarga',
		category: 'semiamarga',
		shortDescription: 'Centro frutal con notas dulces y profundas.',
		description:
			'La ciruela pasa aporta un relleno jugoso y oscuro que realza el carácter del cacao semiamargo en una combinación intensa y memorable.',
		image: '/images/products/semiamargo-ciruela.jpeg',
		alt: 'Chocolate semiamargo artesanal con ciruela pasa.',
		featured: true,
		notes: ['Centro frutal', 'Notas profundas', 'Contraste suave'],
		presentation: 'Perfecto para surtidos gourmet y pedidos especiales.',
		idealFor: 'Personas que disfrutan sabores intensos con un toque frutal.',
	},
	{
		slug: 'chocolate-semiamargo-con-grano-de-cafe',
		name: 'Chocolate semiamargo con Grano de Café',
		line: 'Línea semiamarga',
		category: 'semiamarga',
		shortDescription: 'Cacao y café en una pieza pequeña con mucha personalidad.',
		description:
			'Chocolate semiamargo con un grano de café entero que aporta aroma, textura y un remate tostado ideal para paladares intensos.',
		image: '/images/products/semiamargo-cafe.jpeg',
		alt: 'Chocolate semiamargo artesanal con grano de café.',
		notes: ['Aroma tostado', 'Grano entero', 'Perfil intenso'],
		presentation: 'Muy buscado para cajas premium y detalles corporativos.',
		idealFor: 'Quien ama el café y los sabores con carácter.',
	},
	{
		slug: 'granos-de-cafe-cubiertos-de-chocolate-semiamargo',
		name: 'Granos de café cubiertos de chocolate semiamargo',
		line: 'Especialidades',
		category: 'especialidades',
		shortDescription: 'Botana premium para regalar o acompañar una bebida caliente.',
		description:
			'Una especialidad con granos de café cubiertos de chocolate semiamargo que combina energía, textura y un sabor persistente.',
		image: '/images/products/chocolate-leche.jpeg',
		alt: 'Granos de café cubiertos de chocolate semiamargo.',
		featured: true,
		notes: ['Snack gourmet', 'Café entero', 'Acabado brillante'],
		presentation: 'Ideal en bolsita, frasco o empaque premium.',
		idealFor: 'Clientes que buscan un regalo original o un snack selecto.',
	},
	{
		slug: 'chocolate-con-leche',
		name: 'Chocolate con leche',
		line: 'Línea de leche',
		category: 'leche',
		shortDescription: 'Suave, cremoso y muy amigable para todos los gustos.',
		description:
			'Una pieza de chocolate con leche de textura sedosa y dulzor equilibrado, perfecta para públicos amplios y compras recurrentes.',
		image: '/images/products/semiamargo-nuez.jpeg',
		alt: 'Chocolate artesanal con leche.',
		featured: true,
		notes: ['Textura cremosa', 'Sabor amable', 'Versátil'],
		presentation: 'Funciona muy bien en cajas surtidas y pedidos familiares.',
		idealFor: 'Quienes prefieren un chocolate suave y reconfortante.',
	},
	{
		slug: 'chocolate-con-leche-extra-azucar',
		name: 'Chocolate con leche con extra de azúcar',
		line: 'Línea de leche',
		category: 'leche',
		shortDescription: 'Versión más dulce para clientes que aman sabores clásicos.',
		description:
			'Una interpretación más golosa del chocolate con leche, con una sensación dulce y cremosa que recuerda los antojos tradicionales.',
		image: '/images/products/semiamargo-cafe.jpeg',
		alt: 'Chocolate con leche con extra de azúcar.',
		notes: ['Perfil dulce', 'Cuerpo suave', 'Atractivo familiar'],
		presentation: 'Muy práctico para surtidos populares y venta individual.',
		idealFor: 'Clientes que buscan una opción dulce y consentidora.',
	},
	{
		slug: 'tablilla-para-preparar-bebida',
		name: 'Tablilla de chocolate para preparar bebida',
		line: 'Bebidas y cocina',
		category: 'bebidas-y-cocina',
		shortDescription: 'Pensada para disolverse en agua caliente o leche caliente.',
		description:
			'Tablilla artesanal para preparar una bebida chocolatosa en un litro de agua o leche caliente, con sabor casero y gran presencia en taza.',
		image: '/images/products/catalogo-artesanal.jpeg',
		alt: 'Catálogo artesanal de chocolates y tablillas.',
		notes: ['Para preparar bebida', 'Rinde 1 litro', 'Tradición casera'],
		presentation: 'Excelente para temporada, canastas y venta por paquete.',
		idealFor: 'Quien quiere llevar la experiencia del chocolate a casa.',
	},
];

export const featuredProducts = products.filter((product) => product.featured);

export const getProductBySlug = (slug: string) =>
	products.find((product) => product.slug === slug);
