import Image from 'next/image';

export function GdgLogo(props: { className?: string }) {
  return (
    <div className={props.className} style={{ position: 'relative' }}>
      <Image
        src="/gdg.png"
        alt="GDG Logo"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}
