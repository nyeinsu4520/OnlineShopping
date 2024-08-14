import React from 'react'
import CategoryBtn from './CategoryBtn';
import Container from './Container';

const CategorySection = () => {
    const title = "Product Categories";
    const categories = [
        
        "electronics",
        "jewellery",
        "men's clothing",
        "women's clothing",
    ];
  return (
    <section id="category-section" className="p-5">
            <Container>
            <p className="text-sm text-gray-500 mb-2">{title}</p>
            <div className="flex overflow-scroll category-button">
                <CategoryBtn categoryName="all" current={true}/>
                {categories.map((category) => (<CategoryBtn key={category} categoryName={category} current={false} />
                  ))}
                  
            </div>
            </Container>
    </section>
  );
};

export default CategorySection;