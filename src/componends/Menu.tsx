import { useState } from 'react';

const MegaMenu = () => {
  const [openSubmenu, setOpenSubmenu] = useState<any>(null);

  const menuItems = [
    {
      title: 'New',
      submenu: [
        'All New',
        'Just Dropped',
        'New Makeup',
        'New Skincare',
        'New Haircare',
        'New Fragrance',
        'New Tools & Brushes',
       ]
    },
    {
      title: 'Brands',
      submenu: [
        "New Brands",
        "Kayali",
        "Saie",
        "k18",
        
      ]
    },
    {
      title: 'Makeup',
      submenu: [
        'Face',
        'Eye',
        'Lip',
        'Cheek',
             ]
    },
    {
        title: 'Skincare',
        submenu: [
          'Moisturizers',
          'Cleansers',
          'Treatment',
          'Mask',
          'EyeCare',
          'Skincare'
               ]
      },
      {
        title: 'Hair',
        submenu: [
          'Styling',
          'Accessories',
          'Brushes & combs',
          'Hair dryer',
               ]
      },
      {
        title: 'Fragrance',
        submenu: [
          'Perfume',
          'Perfume OilS',
          'Cologene',
          
               ]
      },
      {
        title: 'Tools & Brushes',
        submenu: [
          'Brush sets',
          'Face Brushes',
          'Eye Brushes',
          'Lip Brushes',
          'sponge & Applicators'
          
               ]
      },
      {
        title: 'Bath & Body',
        submenu: [
          'Bath & Shower',
          'Body Moistruizers',
          'Sun screen',
          
          
               ]
      },
      {
        title: 'Mini Size',
        submenu: [
          'Bath & Shower',
          'Body Moistruizers',
          'Sun screen',
          
          
               ]
      },
      {
        title: 'Beauty Under $20',
        submenu: [
          'Bath & Shower',
          'Body Moistruizers',
          'Sun screen',
          
          
               ]
      },
      {
        title: `Gift & Gift's card`,
        submenu: [
          'Bath & Shower',
          'Body Moistruizers',
          'Sun screen',
          
          
               ]
      },
      {
        title: `Sales & Offer`,
        submenu: [
          'Bath & Shower',
          'Body Moistruizers',
          'Sun screen',
          
          
               ]
      },
    // Add more categories as needed
  ];

  return (
    <nav className="bg-gray-800  p-4">
      <ul className="flex flex-row justify-evenly">
        {menuItems.map((item, index) => (
          <li 
            key={index}
            className="relative group"
            onMouseEnter={() => setOpenSubmenu(index)}
            onMouseLeave={() => setOpenSubmenu(null)}
          >
            <button className="hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium text-white">
              {item.title}
            </button>
            
            {/* Submenu - shows on hover */}
            {openSubmenu === index && (
              <div className="absolute left-0 mt-2 w-56 bg-white text-gray-800 rounded-md shadow-lg py-1 z-50">
                {item.submenu.map((subItem, subIndex) => (
                  <a 
                    key={subIndex}
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {subItem}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MegaMenu;