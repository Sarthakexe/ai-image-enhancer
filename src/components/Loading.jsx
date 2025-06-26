import React from 'react';

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'transparent',
      }}
    >
      <div
        style={{
          width: '3rem',
          height: '3rem',
          border: '4px solid rgba(100, 116, 139, 0.3)',
          borderTop: '4px solid #4F46E5',
          borderRadius: '50%',
          animation: 'spin 1s ease-in-out infinite',
          boxShadow: '0 0 10px rgba(79, 70, 229, 0.2)',
        }}
      />
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
