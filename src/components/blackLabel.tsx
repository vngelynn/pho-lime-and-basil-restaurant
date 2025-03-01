interface BlackLabelProps {
  text: string
  size?: string
}

const BlackLabel: React.FC<BlackLabelProps> = ({ text, size = "text-sm" }) => {
  // Split the text into lines if it contains spaces

  return (
    <div className='flex flex-col items-center gap-1 pt-6'>
      <div
        className={`bg-black text-white px-4 py-1 text-center font-mono uppercase tracking-widest ${size}`}
        style={{
          minWidth: "80px",
          display: "inline-block",
        }}
      >
        {text}
      </div>
    </div>
  )
}

export { BlackLabel }
