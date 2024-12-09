"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '@/components/page-header';
import { BlogGrid } from '@/components/blog/blog-grid';
import { BlogSearch } from '@/components/blog/blog-search';
import { BlogCategories } from '@/components/blog/blog-categories';
import { blogPosts } from '@/lib/blog-data';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-16">
      <PageHeader
        title="Our Blog"
        description="Insights, tutorials, and updates from our team"
        isHomePage={false}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <BlogSearch value={searchQuery} onChange={setSearchQuery} />
              <BlogCategories
                selected={selectedCategory}
                onChange={setSelectedCategory}
              />
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <BlogGrid posts={filteredPosts} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}