'use client';

import { useState } from 'react';
import Button from '../ui/Button';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md w-full opacity-0-initial animate-fade-in-delay-3">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Jane Doe"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="jane@example.com"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    placeholder="How can I help you?"
                />
            </div>

            <div className="pt-2">
                <Button
                    variant="primary"
                    size="default"
                    className="w-full justify-center"
                    disabled={status === 'submitting' || status === 'success'}
                >
                    {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent' : 'Send Message'}
                </Button>
            </div>

            {status === 'success' && (
                <p className="text-sm text-green-400 text-center mt-4 animate-fade-in">
                    Thanks for reaching out! I'll get back to you soon.
                </p>
            )}
        </form>
    );
}
