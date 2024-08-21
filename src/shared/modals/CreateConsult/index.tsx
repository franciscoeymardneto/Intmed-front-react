import React, { useEffect, useState } from "react";
import { CreateConsultModalProps } from "./types";
import { ConsultForm, ModalContainer } from "./styles";
import Modal from 'styled-react-modal'
import ModalActions from "../components/ModalActions";
import { useForm } from "react-hook-form";
import { useSpeciality } from "../../../hooks/useSpeciality";
import { useDoctor } from "../../../hooks/useDoctor";
import { useSchedule } from "../../../hooks/useSchedule";
import Select from "../../components/Select";
import { useConsult } from "../../../hooks/useConsult";

type SelectOption = number | null
type ConsultFormData = {
    speciality: SelectOption
    doctor: SelectOption
    schedule: SelectOption
    hour: SelectOption
}

const CreateConsultModal: React.FC<CreateConsultModalProps> = ({
    isOpen,
    isLoading,
    toggleModal
}): JSX.Element => {

    const {
        register,
        handleSubmit,
        resetField,
        control,
        reset,
        formState: { errors },
    } = useForm<ConsultFormData>();

    const specialities = useSpeciality().fetchSpeciality;
    const createConsult = useConsult().createConsult()
    const {fetchDoctor} = useDoctor()
    const {fetchSchedule} = useSchedule()

    const [selectedSpec, setSelectedSpec] = useState<SelectOption>(null)
    const [selectedDoc, setSelectedDoc] = useState<SelectOption>(null)
    const [selectedSched, setSelectedSched] = useState<SelectOption>(null)
    const [selectedHour, setSelectedHour] = useState<string | null>(null)
    const [availableHours, setAvailableHours] = useState<string[]>([])

    const doctors = fetchDoctor({
        specialityId: selectedSpec || undefined
    })
    const schedules = fetchSchedule({
        doctorId: selectedDoc || undefined
    })

    useEffect(() => {
        if (selectedSpec) {
            doctors.refetch()
        }
    }, [selectedSpec])

    useEffect(() => {
        if (selectedDoc) {
            schedules.refetch()
        }
    }, [selectedDoc])

    function onSubmit(data: ConsultFormData) {
        createConsult.mutate({
            agenda_id: Number(data.schedule),
            horario: `${data.hour}`
        }, {
            onSuccess: () => {
                reset()
                toggleModal()
            }
        })
    }

    function HandleCancel() {
        reset()
        toggleModal()
    }

    function handleSelectSpec(value: SelectOption) {
        setSelectedSpec(value)
        setSelectedDoc(null)
        setSelectedSched(null)
        resetField('doctor')
        resetField('schedule')
        resetField('hour')

    }

    function handleSelectDoc(value: SelectOption) {
        setSelectedDoc(value)
        setSelectedSched(null)
        resetField('schedule')
        resetField('hour')
    }

    function handleSelectSched(value: number | null) {
        setSelectedSched(value)
        if (!value) {
            setAvailableHours([])
            return
        }
        const selectedSchedule = schedules.data?.find(sched => sched.id == value)
        setAvailableHours(selectedSchedule?.hours || [])
    }

    return (
        <Modal
            isOpen={isOpen}
            onBackgroundClick={HandleCancel}
            onEscapeKeydown={HandleCancel}
        >
            <ModalContainer>
                <h2>Nova Consulta</h2>
                <ConsultForm onSubmit={handleSubmit(onSubmit)}>

                    <Select
                        control={control}
                        label="Especialidade: "
                        placeholder="Escolha a Especialidade"
                        {...register('speciality', {
                            required: 'Especialidade é obrigatória, por favor selecione a especialidade',
                            onChange: (event) => {
                                handleSelectSpec(event.target.value)
                            },
                        })}
                        options={specialities.data?.map(spec => ({
                            key: `${spec.id}`,
                            label: spec.name,
                            value: `${spec.id}`
                        })) || []}
                        isLoading={specialities.isFetching}
                        $hasError={!!errors.speciality?.message}
                        errorMessage={errors.speciality?.message}
                    />

                    <Select
                        control={control}
                        label="Médico: "
                        placeholder="Escolha o Médico"
                        {...register('doctor', {
                            required: 'Médico é obrigatório, por favor selecione o Médico',
                            onChange: (event) => {
                                handleSelectDoc(event.target.value)
                            }
                        })}
                        options={doctors.data?.map(doc => ({
                            key: `${doc.id}`,
                            label: doc.name,
                            value: `${doc.id}`
                        })) || []}
                        disabled={!selectedSpec || doctors.isFetching}
                        isLoading={doctors.isFetching}
                        $hasError={!!errors.doctor?.message}
                        errorMessage={errors.doctor?.message}
                    />

                    <Select
                        control={control}
                        label="Data: "
                        placeholder="Escolha a Agenda"
                        {...register('schedule', {
                            required: 'Agenda é obrigatória, por favor selecione a Agenda',
                            onChange: (event) => {
                                handleSelectSched(event.target.value)
                            },
                        })}
                        options={schedules.data?.map(sched => ({
                            key: `${sched.id}`,
                            label: sched.name,
                            value: `${sched.id}`
                        })) || []}
                        isLoading={schedules.isFetching}
                        disabled={!selectedDoc || schedules.isFetching}
                        $hasError={!!errors.schedule?.message}
                        errorMessage={errors.schedule?.message}
                    />

                    <Select
                        control={control}
                        label="Hora: "
                        placeholder="Escolha o Horário"
                        {...register('hour', {
                            required: 'Horário é obrigatório, por favor selecione o Horário',
                            onChange: (event) => {
                                setSelectedHour(event.target.value)
                            }
                        })}
                        options={availableHours?.map(hour => ({
                            key: hour,
                            label: hour,
                            value: hour
                        })) || []}
                        disabled={!selectedSched}
                        $hasError={!!errors.hour?.message}
                        errorMessage={errors.hour?.message}
                    />


                    <ModalActions
                        isLoading={isLoading || createConsult.isLoading}
                        onCancel={HandleCancel}
                        disabledConfirm={!selectedHour}
                    />
                </ConsultForm>


            </ModalContainer >
        </Modal >
    )
}

export default CreateConsultModal