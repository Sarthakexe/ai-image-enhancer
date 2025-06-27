import Loading from "./Loading";

const ImagePreview = (props) => {
  return (
    <div
      style={{
        marginTop: '2rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem',
        width: '100%',
        maxWidth: '56rem',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {/* Original Image */}
      <div
        style={{
          backgroundColor: 'white',
          boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
          borderRadius: '0.75rem',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h2
          style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            textAlign: 'center',
            backgroundColor: '#1F2937',
            color: 'white',
            padding: '0.5rem',
          }}
        >
          Original Image
        </h2>

        {props.uploaded ? (
          <img
            src={props.uploaded}
            alt="Original"
            style={{
              width: '100%',
              maxHeight: '300px',
              objectFit: 'contain',
              padding: '0.5rem',
            }}
          />
        ) : (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '20rem',
              backgroundColor: '#E5E7EB',
            }}
          >
            No Image Selected
          </div>
        )}
      </div>

      {/* Enhanced Image */}
      <div
        style={{
          backgroundColor: 'white',
          boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
          borderRadius: '0.75rem',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <h2
          style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            textAlign: 'center',
            backgroundColor: '#1F2937',
            color: 'white',
            padding: '0.5rem',
          }}
        >
          Enhanced Image
        </h2>

        {props.enhanced && !props.loading ? (
          <>
            <img
              src={props.enhanced}
              alt="Enhanced"
              style={{
                width: '100%',
                maxHeight: '300px',
                objectFit: 'contain',
                padding: '0.5rem',
              }}
            />
            <a
              href={props.enhanced}
              download="enhanced-image.png"
              style={{
                margin: '0.5rem auto 1rem',
                backgroundColor: '#1F2937',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: '500',
                textAlign: 'center',
              }}
            >
              Download Image
            </a>
          </>
        ) : props.loading ? (
          <Loading />
        ) : (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '20rem',
              backgroundColor: '#E5E7EB',
            }}
          >
            No Enhanced Image
          </div>
        )}
      </div>

    </div>
  );
};

export default ImagePreview;
