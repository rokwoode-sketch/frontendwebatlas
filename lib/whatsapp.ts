export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP?.trim() || '+212773477231'

export function phoneToWaId(phone: string): string {
  return phone.replace(/\D/g, '')
}

export function buildWaUrl(phone: string, message: string): string {
  const id = phoneToWaId(phone)
  return `https://wa.me/${id}?text=${encodeURIComponent(message)}`
}
