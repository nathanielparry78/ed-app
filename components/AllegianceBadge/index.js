import Image from 'next/image'

export default function AllegianceBadge (id, height, width, color) {
  switch(id) {
    case 1:
      return <Image src="/static/img/factions/Alliance.svg" height={height} width={width} fill={color} alt="Alliance"/>;
    case 2:
      return <Image src="/static/img/factions/Empire.svg" height={height} width={width} fill={color} alt="Imperial"/>;
    case 3:
      return <Image src="/static/img/factions/Federation.svg" height={height} width={width} fill={color} alt="Federation"/>;
    case 4:
      return <Image src="/static/img/factions/independent-power.png" height={height} width={width} alt="Independent"/>;
  }
}

