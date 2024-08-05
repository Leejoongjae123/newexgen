"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Link
} from "@nextui-org/react";

export default function NotificationText() {
  return (
    <div className="flex flex-col gap-y-5 ">
      <div className="flex justify-between items-center">
        <div>
        <h2 className="font-bold text-4xl">📢 이번주 소식</h2>
        </div>
        <div>
        <Link href="/notification" className="font-bold text-2xl">
        더보기
        </Link>
        
        </div>
        
        
      </div>
      <div className="">
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
            <TableRow key="1">
              <TableCell className='text-center'>
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
            <TableRow key="2">
              <TableCell className='text-center'>
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
            <TableRow key="3">
              <TableCell className='text-center'>
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
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
