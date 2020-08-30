import React, { useEffect, useRef } from 'react';
import {
  StyledOrder,
  StyledList,
  StyledProducts,
  StyledProductContainer,
} from './styles';
import { Check, TruckDelivery, BuildingWarehouse } from 'tabler-icons-react';
import { ProductCard } from '../ProductCard';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken =
  'pk.eyJ1IjoibWlrZXlzYXVjZSIsImEiOiJja2VndXBvMGQwNGZwMnRwYzZhOXFvYnJnIn0.nytCxEUbVRaVNG42mGmqwg';

const Order = ({
  status,
  tracking_code,
  products,
  mapData,
  delivery_address,
  total,
}) => {
  const mapContainerRef = useRef(null);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: mapData.features[0].center,
      zoom: 14,
    });
    new mapboxgl.Marker()
      .setLngLat(mapData.features[0].center)
      .setPopup(
        new mapboxgl.Popup().setHTML(`<p>${mapData.features[0].place_name}</p>`)
      )
      .addTo(map);
  }, [mapData]);
  const StatusIconMap = {
    Delivered: {
      icon: Check,
      color: '#76b90e',
    },
    'Out for delivery': {
      icon: TruckDelivery,
      color: '#1a1a1a',
    },
    Processing: {
      icon: BuildingWarehouse,
      color: '#1a1a1a',
    },
  };
  const StatusIcon = StatusIconMap[status];
  return (
    <StyledOrder>
      <h4>Order details</h4>
      <StyledList>
        <li>
          Status:{' '}
          <span>
            {status}{' '}
            <StatusIcon.icon
              style={{ verticalAlign: 'text-bottom', color: StatusIcon.color }}
            />
          </span>
        </li>
        <li>
          Tracking Code: <span>{tracking_code}</span>
        </li>
        <li>Total: £{total}</li>
      </StyledList>
      <StyledProducts>
        <h6>Products</h6>
        <StyledProductContainer>
          {products.map(({ product, category }, key) => (
            <ProductCard {...product} category={category} key={key} />
          ))}
        </StyledProductContainer>
        <div>
          <p style={{ marginBottom: '6px' }}>
            This order will be delivered to: <span>{delivery_address}</span>
          </p>
          <div ref={mapContainerRef} />
        </div>
      </StyledProducts>
    </StyledOrder>
  );
};

export { Order };
