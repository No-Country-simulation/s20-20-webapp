-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "card" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cardInfoId" INTEGER NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cardInfo" (
    "id" SERIAL NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "cardType" TEXT NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "issuerBank" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "cardInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaction" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "description" TEXT,
    "status" BOOLEAN NOT NULL,
    "cardId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "targetAccount" TEXT,
    "legalPersonId" INTEGER NOT NULL,

    CONSTRAINT "transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "legalPerson" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyLogo" TEXT NOT NULL,

    CONSTRAINT "legalPerson_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_clientId_key" ON "user"("clientId");

-- CreateIndex
CREATE UNIQUE INDEX "client_phone_key" ON "client"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "card_cardInfoId_key" ON "card"("cardInfoId");

-- CreateIndex
CREATE UNIQUE INDEX "cardInfo_accountNumber_key" ON "cardInfo"("accountNumber");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_cardInfoId_fkey" FOREIGN KEY ("cardInfoId") REFERENCES "cardInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_legalPersonId_fkey" FOREIGN KEY ("legalPersonId") REFERENCES "legalPerson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
