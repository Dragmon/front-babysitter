import React, { useState, useEffect, useMemo, useCallback } from 'react';

var dataState = [];
var dataCapital = [];
var counter = [1];
var counterRemove = 0;
var counterAdd = 0;

const Server = React.createContext();

export function ServerProvider(props) {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [capital, setCapital] = useState([]);
  const [onlyCountry, setOnlyCountry] = useState([]);
  const [Idd, setIdd] = useState([]);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [openAdd, setOpenAdd] = useState(false);
  const [openCheck, setOpenCheck] = useState(false);
  const [flagV, setFlagV] = useState('');
  const [childd, setChild] = useState([]);
  const [agee, setAge] = useState([]);
  const [addChild, setAddChild] = useState([1]);
  const [form, setForm] = useState([]);
  const [openHalfTime, setOpenHalfTime] = useState(false);
  const [openForHours, setOpenForHours] = useState(false);
  const [openNight, setOpenNight] = useState(false);
  const [day, setDay] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data1 = await fetch('http://localhost:3000/nana');
      const info = await data1.json();
      setData(info);
    };
    fetchData();
  }, [setData]);

  const order = (x) => {
    for (var i = x.length - 1; i >= 0; i--) {
      if (x.indexOf(x[i]) !== i) x.splice(i, 1);
    }
    return x;
  };

  useEffect(() => {
    if (data.length !== 0) {
      var orderedCountry = [];

      for (let i = 0; i < data.length; i++) {
        orderedCountry.push(data[i].country);
      }
      setOnlyCountry(order(orderedCountry));
    }
  }, [data]);

  const valueCountry = useCallback(() => {
    var select = document.getElementById('countryId');
    setCountry(select.value);
    setCapital([]);
    setState([]);
  }, []);

  const valueState = useCallback(() => {
    var select = document.getElementById('state');
    setState(select.value);
    setCapital([]);
  }, []);

  const valueCapital = useCallback(() => {
    var select = document.getElementById('capital');
    setCapital(select.value);
  }, []);

  const validatorState = useCallback(() => {
    dataState.splice(0, dataState.length);
    if (data.length !== 0) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].country === country) {
          dataState.push(data[i].state);
        }
      }
    }
    return order(dataState);
  }, [data, country]);

  const validatorCapital = useCallback(() => {
    dataCapital.splice(0, dataCapital.length);
    if (data.length !== 0) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].state === state) {
          dataCapital.push(data[i].capital);
        }
      }
    }
    return order(dataCapital);
  }, [data, state]);

  const valueId = useCallback(
    (x) => {
      setIdd(data.filter((nana) => nana.id === parseInt(x)));
    },
    [data]
  );

  const modalOpen = useCallback(
    (e) => {
      const valueOnly = data.filter((only) => only.id === parseInt(e));
      if (valueOnly[0].time === 'Tiempo Completo') {
        setOpen(true);
      } else if (valueOnly[0].time === 'Medio Tiempo') {
        setOpenHalfTime(true);
      } else if (valueOnly[0].time === 'Por Horas') {
        setOpenForHours(true);
      } else if (valueOnly[0].time === 'Nocturna') {
        setOpenNight(true);
      }
    },
    [data]
  );

  const modalClose = useCallback(() => {
    setOpen(false);
    setOpenHalfTime(false);
    setOpenForHours(false);
    setOpenNight(false);
    setDay('');
  }, []);

  // const modalOpenAdd = useCallback(() => {
  //   setOpenAdd(true);
  // }, []);

  const modalCloseAdd = useCallback(() => {
    setOpenAdd(false);
    setFlagV('');
    setAddChild([1]);
    counterAdd = 0;
    counterRemove = 0;
    counter = [1];
    setChild([]);
    setAge([]);
    setForm([]);
    setDate(new Date());
    setOpenForHours(false);
    setOpenNight(false);
    setDay('');
  }, []);

  const modalCloseHalf = useCallback(() => {
    setOpenAdd(false);
    setFlagV('');
    setAddChild([1]);
    counterAdd = 0;
    counterRemove = 0;
    counter = [1];
    setChild([]);
    setAge([]);
    setForm([]);
    setDate(new Date());
    setOpenHalfTime(false);
    setOpenForHours(false);
    setOpenNight(false);
    setDay('');
  }, []);

  const modalCloseNight = useCallback(() => {
    setOpenAdd(false);
    setFlagV('');
    setAddChild([1]);
    counterAdd = 0;
    counterRemove = 0;
    counter = [1];
    setChild([]);
    setAge([]);
    setForm([]);
    setDate(new Date());
    setOpenHalfTime(false);
    setOpenForHours(false);
    setOpenNight(false);
    setDay('');
  }, []);

  const modalOpenCheck = useCallback(() => {
    setOpenCheck(true);
  }, []);

  const modalCloseCheck = useCallback(() => {
    setOpenCheck(false);
    setFlagV('');
    setAddChild([1]);
    counterAdd = 0;
    counterRemove = 0;
    counter = [1];
    setChild([]);
    setAge([]);
    setForm([]);
    setDate(new Date());
    setDay('');
  }, []);

  const onChange = useCallback((date) => {
    setDate(date);
  }, []);

  const buttonDay = useCallback(() => {
    setOpen(false);
    setOpenAdd(true);
    setOpenHalfTime(false);
    setOpenNight(false);
  }, []);

  const buttonCheck = useCallback(() => {
    setOpen(false);
    setOpenAdd(false);
    setOpenCheck(true);
  }, []);

  const valueFlag = useCallback(() => {
    var selectFlag = document.getElementById('flag');
    setFlagV(selectFlag.value);
  }, []);

  const addChildren = useCallback(() => {
    counterAdd = counterAdd + 1;
    counter.push(1);
    setAddChild(counter);
  }, []);

  const removeChildren = useCallback(() => {
    counterRemove = counterRemove + 1;
    if (counterAdd < counterRemove) {
      counterAdd = 0;
      counterRemove = 0;
    } else {
      counter.pop();
      setAddChild(counter);
    }
  }, []);

  const totalValue = useCallback(() => {
    alert('Gracias por contratar con nosotros');
    setOpenCheck(false);
    setFlagV('');
    setAddChild([1]);
    counterAdd = 0;
    counterRemove = 0;
    counter = [1];
    setChild([]);
    setAge([]);
    setForm([]);
    setDate(new Date());
  }, []);

  const knowMorning = useCallback(() => {
    var selectMoring = document.getElementById('morning');
    setDay(selectMoring.value);
  }, []);

  const knowLate = useCallback(() => {
    var selectLate = document.getElementById('late');
    setDay(selectLate.value);
  }, []);

  const value = useMemo(() => {
    return {
      day,
      openHalfTime,
      openForHours,
      openNight,
      openCheck,
      setAge,
      setChild,
      form,
      setForm,
      addChild,
      agee,
      childd,
      flagV,
      openAdd,
      date,
      data,
      country,
      state,
      capital,
      valueCountry,
      onlyCountry,
      valueState,
      valueCapital,
      validatorState,
      validatorCapital,
      valueId,
      Idd,
      modalOpen,
      open,
      modalClose,
      buttonDay,
      onChange,
      // modalOpenAdd,
      modalCloseAdd,
      valueFlag,
      addChildren,
      removeChildren,
      modalOpenCheck,
      modalCloseCheck,
      buttonCheck,
      totalValue,
      modalCloseHalf,
      knowMorning,
      knowLate,
      modalCloseNight,
    };
  }, [
    day,
    openHalfTime,
    openForHours,
    openNight,
    openCheck,
    setAge,
    setChild,
    form,
    setForm,
    addChild,
    agee,
    childd,
    flagV,
    openAdd,
    date,
    data,
    country,
    state,
    capital,
    valueCountry,
    onlyCountry,
    valueState,
    valueCapital,
    validatorState,
    validatorCapital,
    valueId,
    Idd,
    modalOpen,
    open,
    modalClose,
    buttonDay,
    onChange,
    // modalOpenAdd,
    modalCloseAdd,
    valueFlag,
    addChildren,
    removeChildren,
    modalOpenCheck,
    modalCloseCheck,
    buttonCheck,
    totalValue,
    modalCloseHalf,
    knowMorning,
    knowLate,
    modalCloseNight,
  ]);

  return <Server.Provider value={value} {...props} />;
}

export function useServer() {
  const context = React.useContext(Server);
  if (!context) {
    throw new Error('useServer debe estar dentro del proveedor Name');
  }
  return context;
}
