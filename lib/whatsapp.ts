export const WHATSAPP_NUMBER = '+212624363356'

export function phoneToWaId(phone: string): string {
  return phone.replace(/\D/g, '')
}

export function buildWaUrl(phone: string, message: string): string {
  const id = phoneToWaId(phone)
  return `https://wa.me/${id}?text=${encodeURIComponent(message)}`
}
