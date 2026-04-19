const whatsappNumber = '5215610426400';

export const buildWhatsAppUrl = (message: string) =>
	`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
