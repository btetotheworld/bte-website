"use client";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-b-[24px] rounded-tr-[24px] p-6 w-full max-w-md">
        <h2 className="text-text-default font-[600] text-xl mb-4">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-text-default font-[600] mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-[#03045E] rounded-b-[24px] rounded-tr-[24px]"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-text-default font-[600] mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-[#03045E] rounded-b-[24px] rounded-tr-[24px]"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-text-default font-[600] mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border border-[#03045E] rounded-b-[24px] rounded-tr-[24px]"
              rows={4}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-white text-text-default py-2 px-4 rounded-b-[24px] rounded-tr-[24px] border-[#03045E] border-2 font-[600] hover:bg-[#03045E] transition-all duration-200 ease-out hover:text-white mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#03045E] text-white py-2 px-4 rounded-b-[24px] rounded-tr-[24px] font-[600] hover:bg-opacity-90 transition-all duration-200 ease-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
