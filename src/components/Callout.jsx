// components/Callout.jsx

export default function Callout({ children, type = 'info' }) {
    let typeClasses = '';
  
    switch (type) {
      case 'warning':
        typeClasses = 'bg-yellow-100 border-yellow-500 text-yellow-700';
        break;
      case 'danger':
        typeClasses = 'bg-red-100 border-red-500 text-red-700';
        break;
      case 'success':
        typeClasses = 'bg-green-100 border-green-500 text-green-700';
        break;
      default:
        typeClasses = 'bg-blue-100 border-blue-500 text-blue-700';
    }
  
    return (
      <div className={`border-l-4 p-4 my-4 rounded ${typeClasses}`}>
        {children}
      </div>
    );
  }
  