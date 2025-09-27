interface AlertProps {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  onClose?: () => void;
  className?: string;
}

const getAlertClasses = (type: string): string => {
  const types = {
    success: 'bg-green-800 border-green-600 text-green-100',
    error: 'bg-red-800 border-red-600 text-red-100',
    info: 'bg-blue-800 border-blue-600 text-blue-100',
    warning: 'bg-yellow-800 border-yellow-600 text-yellow-100'
  };
  return types[type as keyof typeof types] || types.info;
};

const getAlertIcon = (type: string): string => {
  const icons = {
    success: '✅',
    error: '❌',
    info: 'ℹ️',
    warning: '⚠️'
  };
  return icons[type as keyof typeof icons] || icons.info;
};

export default function Alert({ 
  type, 
  message, 
  onClose, 
  className = '' 
}: AlertProps) {
  const alertClasses = getAlertClasses(type);
  const icon = getAlertIcon(type);

  return (
    <div className={`p-4 rounded-md border shadow-lg transition-all duration-300 ${alertClasses} ${className}`}>
      <div className="flex items-center justify-between">
        <p className="text-sm flex items-center">
          <span className="mr-2">{icon}</span>
          {message}
        </p>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 text-current hover:opacity-70 focus:outline-none"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
