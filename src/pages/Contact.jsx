
export default function Contact() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form className="space-y-4 max-w-lg">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input type="text" className="w-full border p-2 rounded" placeholder="Your Name" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" className="w-full border p-2 rounded" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea className="w-full border p-2 rounded" rows="4" placeholder="Your message..."></textarea>
        </div>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">Send Message</button>
      </form>
    </div>
  )
}