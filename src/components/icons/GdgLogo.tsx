import Image from 'next/image';

export function GdgLogo(props: {className?: string}) {
  return (
    <div className={props.className} style={{position: 'relative'}}>
      <Image
        src="/gdg_logo.png"
        alt="GDG Logo"
        width={128}
        height={48}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{objectFit: 'contain', width: '100%', height: 'auto'}}
      />
    </div>
  );
}
