import Image from 'next/image';

export function GdgLogo2(props: {className?: string}) {
  return (
    <div className={props.className} style={{position: 'relative', width: '40px'}}>
      <Image
        src="/gdg_logo2.png"
        alt="GDG Logo"
        width={40}
        height={20}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{objectFit: 'contain', width: '100%', height: 'auto'}}
      />
    </div>
  );
}
