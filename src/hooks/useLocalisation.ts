import { useEffect, useState } from 'react';


interface UseLocalisationProps {
  longitude: any;
  latitude: any;
  error: string;
}

export const useLocalisation = (): UseLocalisationProps => {
  const [position, setPosition] = useState<{latitude: string, longitude: string}>({latitude: "", longitude: ""});
  const [error, setError] = useState<string>("");

  const onChange = ({coords}: any) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };
  const onError = (error: any) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }
    let watcher = geo.watchPosition(onChange, onError);
    return () => geo.clearWatch(watcher);
  }, []);

  return {...position, error};
}