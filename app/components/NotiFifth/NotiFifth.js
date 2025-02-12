"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Link,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { animals } from "./data";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function NotiFifth() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col justify-center items-start gap-y-5">
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-between items-center w-full">
          <div className="w-1/2 md:w-1/3">
            <h2 className="font-bold text-4xl">📢 이번주 소식</h2>
          </div>
          <div className="w-1/2 md:w-1/3 flex gap-x-5">
            {/* <Select label="검색조건" className="max-w-xs">
              {animals.map((animal) => (
                <SelectItem key={animal.key}>{animal.label}</SelectItem>
              ))}
            </Select> */}
            <Input type="text" label="검색" />
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-full">
        <Table
          hideHeader
          removeWrapper
          aria-label="Example static collection table"
        >
          <TableHeader>
            <TableColumn width={1}></TableColumn>
            <TableColumn width={5}></TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1" onClick={onOpen}>
              <TableCell className="text-center">
                <Chip
                  className="text-white font-extrabold text-lg md:text-2xl p-5"
                  color="success"
                >
                  톡톡톡
                </Chip>
              </TableCell>

              <TableCell className="text-2xl md:text-2xl font-bold">
                초등 학습 계획, 어디까지 준비해야 할까요?
              </TableCell>
            </TableRow>
            <TableRow key="2"onClick={onOpen}>
              <TableCell className="text-center">
                <Chip
                  className="text-white font-extrabold text-lg md:text-2xl p-5"
                  color="success"
                >
                  톡톡톡
                </Chip>
              </TableCell>
              <TableCell className="text-2xl md:text-2xl font-bold">
                성적 안 오르는 중2, 학원 끊는 게 맞을까요?
              </TableCell>
            </TableRow>
            <TableRow key="3"onClick={onOpen}>
              <TableCell className="text-center">
                <Chip
                  className="text-white font-extrabold text-lg md:text-2xl p-5"
                  color="success"
                >
                  톡톡톡
                </Chip>
              </TableCell>
              <TableCell className="text-2xl md:text-2xl font-bold">
                고3 학원비 언제까지 내야 할까요?
              </TableCell>
            </TableRow>
            <TableRow key="3"onClick={onOpen}>
              <TableCell className="text-center">
                <Chip
                  className="text-white font-extrabold text-lg md:text-2xl p-5"
                  color="success"
                >
                  교육정보
                </Chip>
              </TableCell>
              <TableCell className="text-2xl md:text-2xl font-bold">
                개포중학교 학군 어떤가요?
              </TableCell>
            </TableRow>
            <TableRow key="3"onClick={onOpen}>
              <TableCell className="text-center">
                <Chip
                  className="text-white font-extrabold text-lg md:text-2xl p-5"
                  color="success"
                >
                  교육정보
                </Chip>
              </TableCell>
              <TableCell className="text-2xl md:text-2xl font-bold">
                근처에 좋은 영어유치원 소개 부탁드려요 요{" "}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="flex justify-center items-center w-full text-4xl my-10">
          <Pagination
            className=""
            isCompact
            showControls
            total={10}
            initialPage={1}
            size="lg"
          />
        </div>
      </div>
      <Modal size='4xl' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
